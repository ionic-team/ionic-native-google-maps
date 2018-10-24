export class GoogleMapCordovaMock {
  getMap = jest.fn(() => new MapMock());
}

export class GoogleMapsCordovaMock {
}

export class MapMock {
  remove = jest.fn();
}
