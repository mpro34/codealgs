#include <string>
#include <iostream>
#include <map>
#include <stdlib.h>
#include <stdio.h>
#include <sstream>
#include <vector>

using namespace std;
/*
 * 1.1 Check is input string s is a unique string
 */
bool isUnique (string s) {
  map<char,int> charmap;
  for (int i=0; i < s.size(); ++i) {
    if ( charmap[s.at(i)] == 1 )
      return false;
    else
      charmap[s.at(i)]++;
  }
  return true;
}

/*
 * 1.2 Check if string a is a permutation of string b
 */
bool checkPerm (string a, string b) {
  int aCount=0;
  int bCount=0;
  if (a.size() != b.size()) {
    return false;
  } else {
    for (int i=0; i < a.size(); ++i) {
      aCount += a[i];
      bCount += b[i];
    }
  }
  if (aCount != bCount)
    return false;
  return true;
}

/*
 * 1.3 Replace any spaces in input string with "%20"
 */
string URLify (string s, int size) {
  for (int i=0; i<size; ++i) {
    if (s[i] == ' ') {
      s.insert (i, "%20");
      s.erase(s.begin()+i+3);
    }
  }
  return s;
}

/*
 * 1.4 Check if input string is a permuation of a palindrome
 */
bool palinPermu (string s) {
  int sum=0;
  map<char,int> hasht;
  for (int i=0; i < s.size(); ++i) {
    hasht[s.at(i)] += 1;
  }
  for (map<char,int>::iterator it=hasht.begin(); it != hasht.end(); ++it) {
    if (it->second >= 2) {
      sum += it->second;
    }
  }
  if (sum != ( s.size()-1 )) {
    return false;
  }
  return true;
}

/*
 * 1.5 Check if input of two strings is one edit away
 */
bool oneAway (string a, string b) {
  int sumA, sumB, strSize = 0;
  if (abs(a.size() - b.size()) > 1) 
    return false;
  for (int i=0; i<a.size(); ++i) {
    sumA += a.at(i);
  }
  for (int j=0; j<b.size(); ++j) {
    sumB += b.at(j);
  }
  if ( (abs(sumA-sumB) < 97) || (abs(sumA-sumB) > 122) ) {
    return false;
  }
  return true;
}

/*
 * 1.6 Compress the input string by adding numbers
 */
string strCompress(string s) {
  int count=0;
  string result="";
  stringstream ss;
  for (int i=0; i<s.size(); ++i) {
    result += s.at(i);
    i = count;
    while (s.at(i) == s.at(count)) {
      count++;
    }
    int x = count - i;
    ss << x;
    result += ss.str();
    ss.str(std::string());
  }
  return result;
}

/* 
 * 1.7 Rotate a input NxN matrix 90 degrees
 */
void rotateMat (short** m, short size) {
  vector<short> temp;
  vector<short> result;
  for (short i=0; i<size; ++i) {
    for (short j=0; j<size; ++j) {
      temp.push_back(m[i][j]);
    }
  }
  for (short k=0; k<size/2; ++k) {
    result.push_back(temp[size * 2 + k]);
    result.push_back(temp[size + k]);
    result.push_back(temp[k]);
  }
  for (short l=0; l<size; ++l) {
    for (short a=0; a<size; ++a) {
      m[l][a] = result[l+a];
    }
  }
}


int main() {
//1.1
  string mystring = "chgis";
  cout << isUnique(mystring) << endl;
//1.2  
  string a = "racecar";
  string b = "acecar";
  cout << checkPerm(a, b) << endl;
//1.3
  string s = "Chris whiting is me         ";
  int s_size = s.size();
  cout << URLify(s, s_size) << endl;
//1.4
  string c = "Tact coa";
  cout << palinPermu(s) << endl;
//1.5
  string d = "bale";
  string e = "kale";
  cout << oneAway(d, e) << endl;
//1.6
  string f = "aaabbd";
  cout << strCompress(f) << endl;

  return 0;
}
