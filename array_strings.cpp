#include <string>
#include <iostream>
#include <map>

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

  return 0;
}
