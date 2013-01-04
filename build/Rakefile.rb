require "build.rb"

task :dev => [:setDevEnv,:launch]

task :prod => [:setProdEnv,:clean,:compile,:test,:launch]

task :setDevEnv do
	puts "==================================================="
	Build.set_development_env
	puts "Set env is development"
end

task :setProdEnv do
	puts "==================================================="
	Build.set_production_env
	puts "Set env is production"
end

task :test do
	puts "==================================================="
  	Build.test
  	puts "The task of test is finished."
end

task :clean do 
	puts "==================================================="
	Build.clean
	puts "The task of clean is finished."
end

task :compile do
	puts "==================================================="
	Build.compile
	puts "The task of compile is finished."
end


task :launch do
	puts "==================================================="
	puts "The task of launch is finished."
	Build.lanuch_app
end




