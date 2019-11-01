# Phase 1: Generate and store all possible anagrams of the first string
  # Sort of like a permutation

puts "Phase 1:"
def first_anagram?(str1,str2)
  str1.split("").permutation.to_a.select{|el|el.length==str1.length}.map!(&:join).include?(str2)
  # iterate through
end

p first_anagram?("dog","got") == false
p first_anagram?("dog","god") == true
p first_anagram?("dog","got") == false
# Phase 2
def second_anagram?(str1,str2)
  str1.each_char.with_index do |char,i|
    str2.slice!(str2.index(char)) if str2.index(char)
  end

  str2.empty?
end

puts "Phase 2:"
p second_anagram?("dog","got") == false
p second_anagram?("dog","god") == true
p second_anagram?("dog","goe") == false

# Phase 3 n ln(n)
puts "Phase 3:"
def third_anagram?(str1, str2)
  str1.split("").sort == str2.split("").sort
end

p third_anagram?("dog","got") == false
p third_anagram?("dog","god") == true
p third_anagram?("dog","goe") == false

# phase 4
puts "Phase 4:"
def fourth_anagram?(str1, str2)
  hash_1 = Hash.new(0)
  hash_2 = Hash.new(0)
  str1.each_char { |char| hash_1[char] += 1 }
  str2.each_char { |char| hash_2[char] += 1 }
  hash_1 == hash_2
end

p fourth_anagram?("dog","got") == false
p fourth_anagram?("dog","god") == true
p fourth_anagram?("dog","goe") == false


# phase 5 (one hash)
puts "Phase 5:"
def fifth_anagram?(str1, str2)
  hash = Hash.new(0)
  str1.each_char { |char| hash[char] += 1 }
  str2.each_char { |char| hash[char] -= 1 if hash.has_key?(char) }
  hash.values.sum == 0
end

p fifth_anagram?("dog","got") == false
p fifth_anagram?("dog","god") == true
p fifth_anagram?("dog","goe") == false
