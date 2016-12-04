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
	// use the array to populate temp string with 5 most frequent characters
	// compare characters in brackets with temp string
	// if valid, add stoi sectorID to result
	// reset temps and repeat until end of stream
	// output result
	
	string name;
	int result = 0;
	cin >> name;
	
	while (name[0] != '0')
	{
		string sectorID, checksum, expected;
		int max, maxIndex;
		int alphaMode[255] = {0};
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
		// populate a new string with 5 most common letters
		
		for(int i = 0; i < 5; i++)
		{
			max = alphaMode[0];
			maxIndex = 0;
			for(int j = 0; j < name.size() - 7; j++)
			{
				if(isalpha(name[j]) && alphaMode[name[j]] > alphaMode[name[maxIndex]])
					maxIndex = j;
			}
			expected += name[maxIndex];
			alphaMode[name[maxIndex]] = 0;
		}
		if (checksum == expected)
		{
			//cout << checksum << " " << expected << " " << "true" << " + " << sectorID << endl;
			result += stoi(sectorID);
		}
		cin >> name;
	}
	cout << result;
}
