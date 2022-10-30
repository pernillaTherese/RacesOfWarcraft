class Race {
  constructor(
    id,
    factionId,
    title,
    traits,
    classes,
    homeCity,
    racialMount,
    leader,
    imageUrl
  ) {
    this.id = id;
    this.factionId = factionId;
    this.title = title;
    this.traits = traits;
    this.classes = classes;
    this.homeCity = homeCity;
    this.racialMount = racialMount;
    this.leader = leader;
    this.imageUrl = imageUrl;
  }
}

export default Race;
