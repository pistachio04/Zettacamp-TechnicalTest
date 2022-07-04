      // Expected Result = 7
      // Direction : Find median of this array
      const input = [8, 7, 7, 9, 5, 4, 2, 9];

      function result(input) {
        // Your Code Here
        const nilaiUrut = input.sort((a, b) => a - b);
        const nilaiTengah = Math.floor(input.length / 2);
        const nilaiMedian =
          (nilaiUrut[nilaiTengah - 1] + nilaiUrut[nilaiTengah]) / 2;

        if (input.length % 2 == 1) {
          return nilaiUrut[nilaiTengah];
        } else {
          return nilaiMedian;
        }
      }
      console.log(result(input));
