require "build.rb"

task :dev => [:setDevEnv,:launch]

task :prod => [:setProdEnv,:clean,:compile,:launch]

task :setDevEnv do
	Build.set_development_env
end

task :setProdEnv do
	Build.set_production_env
end

task :test do
  	Build.test
end

task :clean do 
	Build.clean
	puts "The task of clean is finished."
	puts "==================================================="
end

task :compile do
	Build.compile
	puts "The task of compile is finished."
	puts "==================================================="
end


task :launch do
	puts "==================================================="
	puts "The task of launch is finished."
	Build.lanuch_app
end




