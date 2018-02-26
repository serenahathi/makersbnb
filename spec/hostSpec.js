describe('Host', () => {
  let host;
  let property;

  beforeEach(() => {
    host = new Host();
    property = jasmine.createSpyObj('property', ['name', 'price', 'description', 'availability']);
  });

  it('can post a property', () => {
    host.post(property);
    expect();
  });
});
