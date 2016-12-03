#include <iostream>
using namespace std;

bool isTriangle(int a, int b, int c)
{
	if (a + b <= c || a + c <= b || b + c <= a)
	{
		return false;
	}
	return true;
}
int main() {
	int num1, num2, num3;
	int count = 0;
	cin >> num1 >> num2 >> num3;
	while (num1 >= 0)
	{
		//cout << num1 << " " << num2 << " " << num3 << endl;
		if (isTriangle(num1, num2, num3)) 
			count++;
		cin >> num1 >> num2 >> num3;
	}
	cout << count;
}
