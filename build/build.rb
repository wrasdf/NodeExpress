class Build

  ROOT = Dir.pwd

  def self.clean

    # clean css files
    shell = "rm -rdf #{ROOT}/public/js/ &&" ;
    shell += "mkdir #{ROOT}/public/js/ && ";

    # clean css files
    shell += "rm -rdf #{ROOT}/public/css/ && ";
    shell += "mkdir #{ROOT}/public/css/";

    system shell

  end

  def self.compile

    compressList = {
        "viewJS" => {"src" => ["development/js/jquery-1.8.3.min.js", "development/js/headerEdit.js", "development/js/view.js"], "dest" => "public/js/all-view.min.js"},
        "commonJS" => {"src" => ["development/js/jquery-1.8.3.min.js", "development/js/headerEdit.js"], "dest" => "public/js/all-header.min.js"},
        "allCSS" => {"src" => ["development/css/common.css", "development/css/app.css"], "dest" => "public/css/all.css"}
    }

    compressList.each do |name, source|
      inputFiles = source["src"].collect { |x| "#{ROOT}/"+x }.join(" ").to_s
      outputFile = source["dest"]
      shell  = "touch #{ROOT}/#{outputFile} && "
      shell += "cat #{inputFiles} > #{ROOT}/#{outputFile} && "
      shell += "java -jar #{ROOT}/build/yuicompressor-2.4.7.jar --charset utf-8 #{ROOT}/#{outputFile} -o #{ROOT}/#{outputFile}";
      system shell
    end
  end

  def self.test
    system "cd #{ROOT} && mocha"
  end

  def self.launch_app(env=development)
  	puts env
    system "cd #{ROOT} && NODE_ENV=#{env} node app"
  end

end
