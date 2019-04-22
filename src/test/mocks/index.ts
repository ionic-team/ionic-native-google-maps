export class GoogleMapCordovaMock {
  getMap = jest.fn((arg1: any) => new MapMock());
}

export class GoogleMapsCordovaMock {
}

export class MapMock {
  remove = jest.fn();
}
