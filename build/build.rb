class Build

	ROOT = Dir.pwd + '/../'

	def self.set_development_env
		system 'export NODE_ENV=development'
	end

	def self.set_production_env
		system 'export NODE_ENV=production'
	end

	def self.clean
		shell = 'cd .. && '
		# clean css files
	    shell += 'rm -rdf public/js/ && ';
	    shell += 'mkdir public/js/ && ';

	    # clean css files
	    shell += 'rm -rdf public/css/ && ';
	    shell += 'mkdir public/css/';

	    system shell
	end

	def self.compile

		compressList = {
			"viewJS" => {"src"=>["development/js/jquery-1.8.3.min.js","development/js/headerEdit.js","development/js/view.js"],"dest"=>"public/js/all-view.min.js"},
			"commonJS" => {"src"=>["development/js/jquery-1.8.3.min.js","development/js/headerEdit.js"],"dest"=>"public/js/all-header.min.js"},		
			"allCSS" => {"src"=>["development/css/common.css","development/css/app.css"],"dest"=>"public/css/all.css"}
		}

		compressList.each do |name,source|

			inputFiles = source["src"].collect{ |x| "#{ROOT}"+x }.join(" ").to_s
			outputFile = source["dest"]
			# shell "system touch #{ROOT}public/js"
			# shell "system touch #{outputFile}"


			shell = "java -jar yuicompressor-2.4.7.jar --charset utf-8 #{inputFiles} -o #{ROOT}#{outputFile}"; 
			puts shell
			system shell
		end	
	end

 	def self.test
 		system 'cd .. && mocha'	
 	end

	def self.lanuch_app
		system 'cd .. && node app'
	end

	# def self.t
	# 	puts ROOT
	# end

end
