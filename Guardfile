# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'compass', :configuration_file => '/Users/fuchi/study/sencha/apps/gallaryist/resources/sass/config.rb' do
  watch(%r{^resources/(.*)\.s[ac]ss$})
end

guard 'coffeescript', :output => 'app', :bare => true do
  watch(%r{^app/(.+)\.coffee$})
end

guard 'livereload' do
  watch(%r{^app/(.+)\.js$})
  watch(%r{^resources/(.+)\.css$})
  watch('app.js')
end
#
# guard 'rspec' do
#   watch(%r{^spec/.+_spec\.rb$})
#   watch(%r{^lib/(.+)\.rb$})     { |m| "spec/lib/#{m[1]}_spec.rb" }
#   watch('spec/spec_helper.rb')  { "spec" }
#
#   # Rails example
#   watch(%r{^app/(.+)\.rb$})                           { |m| "spec/#{m[1]}_spec.rb" }
#   watch(%r{^app/(.*)(\.erb|\.haml)$})                 { |m| "spec/#{m[1]}#{m[2]}_spec.rb" }
#   watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { |m| ["spec/routing/#{m[1]}_routing_spec.rb", "spec/#{m[2]}s/#{m[1]}_#{m[2]}_spec.rb", "spec/acceptance/#{m[1]}_spec.rb"] }
#   watch(%r{^spec/support/(.+)\.rb$})                  { "spec" }
#   watch('config/routes.rb')                           { "spec/routing" }
#   watch('app/controllers/application_controller.rb')  { "spec/controllers" }
#
#   # Capybara request specs
#   watch(%r{^app/views/(.+)/.*\.(erb|haml)$})          { |m| "spec/requests/#{m[1]}_spec.rb" }
#
#   # Turnip features and steps
#   watch(%r{^spec/acceptance/(.+)\.feature$})
#   watch(%r{^spec/acceptance/steps/(.+)_steps\.rb$})   { |m| Dir[File.join("**/#{m[1]}.feature")][0] || 'spec/acceptance' }
# end
#
#
# guard 'sass', :input => 'resources/sass', :output => 'resources/css', :compass => true
#

