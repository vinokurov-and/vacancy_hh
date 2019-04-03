import Api from "./services";

class Area {
  getApi() {
    return Api.getArea();
  }

  getArea(vacancy) {
    const areaCountryName = vacancy
      .map(({ area }) => area.main_parent)
      .filter(onlyUniqueForProp);
    return areaCountryName;
  }
}

function onlyUniqueForProp(value, index, self) {
  const temp = self.map(({ id }) => id);
  return temp.indexOf(value.id) === index;
}

export default new Area();
