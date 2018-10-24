export class GoogleMapMock {
  getMap = jest.fn(() => new MapMock());
}

export class GoogleMapsMock {
  // getMap = jest.fn();
}

export class MapMock {
  remove = jest.fn();
}
