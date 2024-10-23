import React, { useState } from "react";

// Declare main game component
const SpaceAdmiralGame = () => {
  // State variables to manage game data
  const [xp, setXp] = useState(0);
  const [vesselHealth, setVesselHealth] = useState(100);
  const [gold, setGold] = useState(500);
  const [cargo, setCargo] = useState(350);
  const [crew, setCrew] = useState(100);
  const [currentVessel, setCurrentVessel] = useState(ships[0]);
  const [vesselInventory, setVesselInventory] = useState([]);
  const [equippedVessel, setEquippedVessel] = useState([ships[0]]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayerShipMenuOpen, setIsPlayerShipMenuOpen] = useState(false);

  const [location, setLocation] = useState(locations[1]); // Default location
  const [vendorMessage, setVendorMessage] = useState("");

  // Function to update the game location
  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  // Function to handle buying a new ship
  const handleBuyNewShip = (shipId) => {
    const purchasedShip = ships.find((ship) => ship.id === shipId);
    if (gold >= purchasedShip.gold) {
      setGold(gold - purchasedShip.gold);
      setVesselInventory([...vesselInventory, purchasedShip]);
      setVendorMessage(`You have purchased the ${purchasedShip.name}!`);
    } else {
      alert("Not enough gold to buy this ship.");
    }
  };

  // Function to repair the ship
  const repairShip = () => {
    if (gold >= 20 && vesselHealth <= 150) {
      setGold(gold - 20);
      setVesselHealth(150); // Assume max health is 150
      setVendorMessage("Your ship has been repaired.");
    } else {
      setVendorMessage(
        "Your ship is already fully repaired or you don't have enough gold."
      );
    }
  };
  // handles docking at eclipse station
  const goEclipse = () => {
    updateLocation(locations[0]);

    setIsMenuOpen(false);
    setIsPlayerShipMenuOpen(false);
    //    console.log('Eclipse Outpost',locations[0]);
  };

  // Function to handle equipping a new ship
  const handleEquipShip = (shipId) => {
    const selectedShip = vesselInventory.find((ship) => ship.id === shipId);
    setEquippedVessel([selectedShip]);
    setVesselHealth(selectedShip.health);
    setVendorMessage(`You have taken command of the ${selectedShip.name}`);
  };

  return (
    <div className="game-container">
      <h1>Admiral of the Fleet</h1>
      {/* Location Info */}
      <div className="location">
        <h3>Location: {location.name}</h3>
        <img src={location.image} alt={location.name} />
        <p>{location.text}</p>
      </div>

      {/* Ship Stats */}
      <div className="stats">
        <h3>Vessel Integrity: {vesselHealth}</h3>
        <h3>Cargo: {cargo}</h3>
        <h3>Gold: {gold}</h3>
      </div>

      {/* Action Buttons */}
      <div className="commands">
        <button onClick={location.buttonFunctions[0]}>
          {location["button text"][0]}
        </button>
        {location["button text"][1] && (
          <button onClick={location.buttonFunctions[1]}>
            {location["button text"][1]}
          </button>
        )}
        <button onClick={location.buttonFunctions[2]}>
          {location["button text"][2]}
        </button>
      </div>

      {/* Vendor Messages */}
      <div className="vendor-message">{vendorMessage}</div>

      {/* Player's Ship Inventory */}
      {isPlayerShipMenuOpen && (
        <div className="player-inventory">
          <h2>Your Ship Inventory</h2>
          {vesselInventory.map((ship) => (
            <div key={ship.id} className="ship">
              <h3>{ship.name}</h3>
              <img src={ship.image} alt={ship.name} />
              <p>Power: {ship.power}</p>
              <p>Health: {ship.health}</p>
              <p>Gold: {ship.gold}</p>
              <button onClick={() => handleEquipShip(ship.id)}>Equip</button>
            </div>
          ))}
        </div>
      )}

      {/* Dealer Inventory */}
      {isMenuOpen && (
        <div className="dealer-inventory">
          <h2>Dealer's Inventory</h2>
          {ships.map((ship) => (
            <div key={ship.id} className="ship">
              <h3>{ship.name}</h3>
              <img src={ship.image} alt={ship.name} />
              <p>Power: {ship.power}</p>
              <p>Health: {ship.health}</p>
              <p>Gold: {ship.gold}</p>
              <button onClick={() => handleBuyNewShip(ship.id)}>Buy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Game data arrays (ships, locations)
const ships = [
  {
    id: 1,
    name: "Skyrunner",
    power: 20,
    health: 100,
    gold: 100,
    image: "https://example.com/skyrunner.jpg",
  },
  {
    id: 2,
    name: "Starblade",
    power: 40,
    health: 200,
    gold: 200,
    image: "https://example.com/starblade.jpg",
  },
];

const locations = [
  {
    name: "Eclipse Outpost",
    "button text": ["Shipyard", "Merchant", "Take Off"],
    buttonFunctions: [() => {}, () => {}, () => {}],
    text: "You enter the main terminal of the Eclipse space station.",
    image: "https://example.com/eclipse-outpost.jpg",
  },
  {
    name: "Your Ship",
    "button text": ["Dock with Eclipse Outpost", "", ""],
    buttonFunctions: [() => {}, () => {}, () => {}],
    text: "You are on your ship. Where do you want to go?",
    image:
      "https://c4.wallpaperflare.com/wallpaper/838/641/215/bridges-fantasy-art-spaceships-science-fiction-navigating-bridge-1920x1200-abstract-fantasy-hd-art-wallpaper-preview.jpg",
  },
];

export default SpaceAdmiralGame;
