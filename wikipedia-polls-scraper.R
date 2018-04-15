#import rvest and xml2
library(rvest)
library(xml2)
library(readr)

#define variable to hold url of wikipedia page
url <- "TK"

#create new variable to hold table of polls 
#use rvest to 'read' url and make into html document
#select table using xpath (or css) selector
#parse html table into data frame
year_polls <- url %>%
  read_html() %>%
  html_nodes(xpath='//*TK/div/table') %>%
  html_table()

#redefine year_polls, which is still a list, as the first (and only) component in that list
year_polls <- year_polls[[1]]

#check to make sure the table has been scraped correctly
head(year_polls)

#write data frame into a csv file
write_csv(year_polls, 'year_polls.csv')
