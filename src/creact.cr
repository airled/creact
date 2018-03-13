require "kemal"

get "/" do
  render "src/views/index.ecr"
end

Kemal.run
