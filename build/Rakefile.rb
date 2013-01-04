require "./build.rb"
env="development"

#task :default => [:launch]
#task :prod => [:clean,:compile,:test,:launch]

task :run do
  env = ENV['ENV']
  if env == nil || env == "dev"
    Rake::Task["launch"].invoke
  end
  if env == "prod"
  	env = "production"
    Rake::Task["clean"].invoke
    Rake::Task["compile"].invoke
    Rake::Task["test"].invoke
    Rake::Task["launch"].invoke
  end
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
  puts "The app will launch"
	Build.lanuch_app env
end





