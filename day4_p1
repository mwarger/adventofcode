#include <iostream>
#include <string>
using namespace std;

int main() {
	// create vars: string sectorID, int result
	// create int array[255] to store mode of each char (letters only)
	// traverse input line
	// -- if char is letter, increment array index corresponding to each letter
	// -- if char is number, append to sectorID string
	// -- if char is left bracket, end traversal
  // ------------------------------------------------
  // TODO:
	// use the array to populate temp string with 5 most frequent characters
	// compare characters in brackets with temp string
	// if valid, add atoi sectorID to result
	// reset temps and repeat until end of stream
	// output result
	
	string name, sectorID, checksum;
	int result;
	int alphaMode[255] = {0};
	cin >> name;
	for (int i = 0; i < name.size(); i++)
	{
		if (isalpha(name[i]))
			alphaMode[name[i]]++;
		else if (isdigit(name[i]))
			sectorID += name[i];
		else if (name[i] == '[')
		{
			i++;
			while (name[i] != ']')
			{
				checksum += name[i];
				i++;
			}
		}
	}
	// cout << name << " " << sectorID << " " << checksum << " " << alphaMode['p'];
}
