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
	int num1, num2, num3, num4, num5, num6, num7, num8, num9;
	int count = 0;
	cin >> num1 >> num2 >> num3 >> num4 >> num5 >> num6 >> num7 >> num8 >> num9;
	while (num1 >= 0)
	{
		//cout << num1 << " " << num4 << " " << num7 << endl;
		if (isTriangle(num1, num4, num7)) 
			count++;
		if (isTriangle(num2, num5, num8))
			count++;
		if (isTriangle(num3, num6, num9))
			count++;
		cin >> num1 >> num2 >> num3 >> num4 >> num5 >> num6 >> num7 >> num8 >> num9;
	}
	cout << count;
}
