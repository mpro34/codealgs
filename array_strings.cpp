#include <string>
#include <iostream>
#include <map>

using namespace std;
/*
 * Check is input string s is a unique string
 */
bool isUnique( string s ) {
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
 * Check if string a is a permutation of string b
 */
bool checkPerm( string a, string b ) {
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


int main() {
  string mystring = "chgis";
  cout << isUnique(mystring) << endl;
  
  string a = "racecar";
  string b = "acecar";
  cout << checkPerm(a, b) << endl;
  return 0;
}
