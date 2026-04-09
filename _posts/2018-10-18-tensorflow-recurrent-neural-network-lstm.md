---
layout: post
title: "Tensorflow Recurrent Neural Network – LSTM"
date: 2018-10-18T07:02:02
categories: [Uncategorized]
tags: [elfsong.cn]
---

最近学校里课上完了，给了两周时间来复习考试。可能是因为突然一下从赶Due的紧张中解脱了出来，居然敢写写代码浪起来了。

上个月看到Google有一个ML Winter Camp，然后又想到自己为了赶Due写论文已经两个月没怎么写过代码了，于是深感惭愧，决定抽空玩一玩Tensorflow和之前一直想搞的Sounding Probe。

其实MNIST并不是特别适合用RNN来预测的，但是用来玩一玩还是没有问题的。经过一波强行优化，RNN的Accuracy在测试集上居然可以和CNN有的一拼了。

<!--more-->

<!-- HTML generated using hilite.me -->

```
# encoding:utf-8
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data


mnist = input_data.read_data_sets("mnist_data/", one_hot=True)

# Hyper Parameters
n_input = 28
n_steps = 28
n_hidden = 128
n_classes = 10

# Define Learning Rate, Training iterations and Batch Size
learning_rate = 0.002
batch_size = 20

def weight_variable(shape):
    initial = tf.truncated_normal(shape, stddev=0.1)
    return tf.Variable(initial)


def bias_variable(shape):
    initial = tf.constant(0.1, shape=shape)
    return tf.Variable(initial)


# Define Placeholders
with tf.name_scope('inputs'):
    x_ = tf.placeholder("float", [None, n_steps, n_input])
    y_ = tf.placeholder("float", [None, n_classes])

# Time Sequence Transform
with tf.name_scope('TS_Transform'):
    x_ts = tf.unstack(x_, n_steps, 1)

# Define BasicLSTMCell
with tf.name_scope("LSTM_layer"):
    lstm_cell = tf.nn.rnn_cell.LSTMCell(n_hidden, forget_bias=0.9)

    # Static RNN Layer
    outputs, states = tf.contrib.rnn.static_rnn(lstm_cell, x_ts, dtype=tf.float32)

# Full Connection Layer
with tf.name_scope("Full_connection_layer"):
    with tf.name_scope('weights'):
        w_fc1 = weight_variable([n_hidden, n_classes])
        tf.summary.histogram('Full_connection_layer_2/weights', w_fc1)

    with tf.name_scope('biases'):
        b_fc1 = bias_variable([n_classes])
        tf.summary.histogram('Full_connection_layer_2/biases', b_fc1)

    with tf.name_scope('prediction'):
        prediction = tf.matmul(outputs[-1], w_fc1) + b_fc1


# Cross Entropy
with tf.name_scope('loss'):
    cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits_v2(logits=prediction, labels=y_))

# Train
with tf.name_scope('Train'):
    optimizer = tf.train.AdamOptimizer(learning_rate=learning_rate).minimize(cost)

# Accuracy Test
with tf.name_scope('Test'):
    correct_pred = tf.equal(tf.argmax(prediction, 1), tf.argmax(y_, 1))
    accuracy = tf.reduce_mean(tf.cast(correct_pred, tf.float32))


# Session
with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
    writer = tf.summary.FileWriter("logs/", sess.graph)

    for iter in range(5000):
        batch_x, batch_y = mnist.train.next_batch(batch_size)
        batch_x = batch_x.reshape((batch_size, n_steps, n_input))

        sess.run(optimizer, feed_dict={x_: batch_x, y_: batch_y})

        if iter % 100 == 0:
            acc = sess.run(accuracy, feed_dict={x_: batch_x, y_: batch_y})
            loss = sess.run(cost, feed_dict={x_: batch_x, y_: batch_y})

            print ("Iter " + str(iter) + ", Minibatch Loss= " + \
                   "{:.6f}".format(loss) + ", Training Accuracy= " + \
                   "{:.5f}".format(acc))

    print (" Finished!")

    test_len = 1024
    test_data = mnist.test.images[:test_len].reshape((-1, n_steps, n_input))
    test_label = mnist.test.labels[:test_len]
    print ("Testing Accuracy:", sess.run(accuracy, feed_dict={x_: test_data, y_: test_label}))
```
