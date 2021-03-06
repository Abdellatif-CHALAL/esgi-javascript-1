function type_check_v1(variable, type) {
  const typeOfVariable = typeof variable;

  switch (typeOfVariable) {
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        case "object":
          return variable !== null && !Array.isArray(variable);
        default:
          return false;
      }
    default:
      return typeOfVariable === type;
  }
}

//console.log(type_check_v1({}, "null"));
//console.log(type_check_v1({}, "object"));
//console.log(type_check_v1({}, "array"));
//console.log(type_check_v1(null, "object"));
//console.log(type_check_v1(null, "null"));
//console.log(type_check_v1({}, "number"));
//console.log(type_check_v1([], "array"));
//console.log(type_check_v1([], "object"));

function type_check_v2(variable, conf) {
  for (key in conf) {
    switch (key) {
      case "type":
        if (!type_check_v1(variable, conf.type)) return false;
        break;
      case "value":
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
      //
      case "enum":
        enum_loop: {
          for (subValue of conf.enum) {
            if (type_check_v2(variable, { value: subValue })) {
              break enum_loop;
            }
          }
          return false;
        }
    }
  }

  return true;
}

console.log(
  type_check_v2({ e: 4 }, { type: "object", enum: [3, "test", { e: 4 }] })
);
