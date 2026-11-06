require 'minitest/autorun'
require 'tmpdir'
require 'fileutils'
require 'liquid'
require_relative '../_plugins/cache-bust'

class CacheBustTest < Minitest::Test
  def setup
    @filters = Object.new.extend(Jekyll::CacheBust)
  end

  def test_nested_sass_change_invalidates_stylesheet_url
    with_sass_sources do
      original = @filters.bust_css_cache('/assets/css/main.css')
      File.write('_sass/components/_publications.scss', '.publication-row { display: grid; }')

      refute_equal original, @filters.bust_css_cache('/assets/css/main.css')
    end
  end

  def test_stylesheet_entrypoint_change_invalidates_url
    with_sass_sources do
      original = @filters.bust_css_cache('/assets/css/main.css')
      File.write('assets/css/main.scss', '$max-content-width: 1000px; @import "components/publications";')

      refute_equal original, @filters.bust_css_cache('/assets/css/main.css')
    end
  end

  def test_unchanged_sources_keep_a_stable_url_and_base_path
    with_sass_sources do
      original = @filters.bust_css_cache('/portfolio/assets/css/main.css')

      assert_match %r{\A/portfolio/assets/css/main\.css\?[0-9a-f]{32}\z}, original
      assert_equal original, @filters.bust_css_cache('/portfolio/assets/css/main.css')
    end
  end

  private

  def with_sass_sources
    Dir.mktmpdir('publication-css-cache') do |directory|
      Dir.chdir(directory) do
        FileUtils.mkdir_p(['assets/css', '_sass/components'])
        File.write('assets/css/main.scss', '@import "components/publications";')
        File.write('_sass/components/_publications.scss', '.publication-row { display: flex; }')
        yield
      end
    end
  end
end
