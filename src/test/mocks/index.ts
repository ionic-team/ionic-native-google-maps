export class GoogleMapMock {
  getMap = jest.fn(() => new MapMock());
}

export class GoogleMapsMock {
}

export class MapMock {
  remove = jest.fn();
}
