# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def example_sum
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
  SQL
end

def continents
  # List all the continents - just once each.
  execute(<<-SQL)
  SELECT
    DISTINCT continent AS continents
  FROM
    countries
  

  SQL
end

def africa_gdp
  # Give the total GDP of Africa.
  execute(<<-SQL)
  SELECT
    SUM(gdp) AS africa_gdp
  FROM
    countries
  WHERE
    continent = 'Africa'
  SQL
end

def area_count
  # How many countries have an area of more than 1,000,000?
  execute(<<-SQL)
  SELECT
    COUNT(*) AS num_large_countries
  FROM
    countries
  WHERE
    area > 10^6
  
  SQL
end

def group_population
  # What is the total population of ('France','Germany','Spain')?
  execute(<<-SQL)
  SELECT
    SUM(population) AS fgs_pop
  FROM
    countries
  WHERE
    name in ('France', 'Germany', 'Spain')
  
  SQL
end

def country_counts
  # For each continent show the continent and number of countries.
  execute(<<-SQL)
  SELECT
    continent, COUNT(*) AS num_of_countries
  FROM
    countries
  GROUP BY 
    continent

  SQL
end

def populous_country_counts
  # For each continent show the continent and number of countries with
  # populations of at least 10 million.
  execute(<<-SQL)
  SELECT
    continent, COUNT(*) AS num_of_countries
  FROM
    countries
  WHERE
    population >= 10^7
  GROUP BY
    continent
    
  
  SQL
end

def populous_continents
  # List the continents that have a total population of at least 100 million.
  execute(<<-SQL)

  SELECT
    continent
  FROM 
    countries
  GROUP BY
    continent
  HAVING
    SUM(population) >= 10^8
  
  SQL
end
