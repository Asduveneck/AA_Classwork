files_make = "card deck hand player game"

for val in $files_make; do 
  touch "lib/" val ".rb"
  touch "spec/" val "_rspec.rb"
done

# https://linuxhint.com/bash_loop_list_strings/ # for bash strucgture

touch lib/