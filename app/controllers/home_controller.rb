class HomeController < ApplicationController
    def index
        gon.google_map_api_key = ENV['GOOGLE_MAP_API_KEY']
    end
end
