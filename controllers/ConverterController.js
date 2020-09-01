class ConverterController {
  getResult() {
    return (req, res) => {
      const convertTo = req.body.conversion;
      const value = req.body.value;
      let result = 0;

      const validations = [
        {
          conversion: 2,
          validation: this.isBinary,
          function: this.convertBinary2Decimal,
        },
        {
          conversion: 10,
          validation: this.isDecimal,
          function: this.convertDecimal2Binary,
        },
      ];

      const validation = validations.filter((v) => v.conversion === convertTo);

      if (!validation.length) {
        return res.status(400).json({ result: "Invali Parameter" });
      }

      if (!validation[0].validation(value)) {
        return res.status(400).json({ result: "Invalid number " });
      }

      result = validation[0].function(value);
      return res.status(200).json({ result });
    };
  }

  isBinary(value) {
    value = value.split("");
    let returnValue = true;

    value.forEach((v) => {
      if (v !== "0" && v !== "1") {
        returnValue = false;
      }
    });
    return returnValue;
  }

  isDecimal(value) {
    if (!isNaN(value)) {
      return true;
    }
    return false;
  }

  convertBinary2Decimal(value) {
    return value
      .split("")
      .reverse()
      .reduce((acc, n, i) => {
        return parseInt(acc) + parseInt(n) * Math.pow(2, i);
      }, 0);
  }

  convertDecimal2Binary(value) {
    return 2;
  }
}
module.exports = ConverterController;
