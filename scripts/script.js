const JENames = [
    "Amaron Vale",
    "Arkenthand",
    "Bitter Heights",
    "Frigid Plains",
    "Midlands",
    "Nahlia Mountains",
    "Southlands",
    "The Clanwoods",
    "The Westwood",
    "Tieryf Vale"
];

Hooks.on("ready", () => {

    const lariaScenePack = game.packs.get("laria-map.scenes");
    const lariaPackSceneId = Array.from(lariaScenePack.index)[0]._id;
    const existingLariaScenes = Array.from(game.scenes).filter(s => s.data.name === "Laria Map");
    
    const lariaJEPack = game.packs.get("laria-map.journalentries");
    const JEPackIds = Array.from(lariaJEPack.index).map(je => je._id);
    const existingLariaJEs = Array.from(game.journal).filter(je => JENames.includes(je.data.name));
    
    if(existingLariaScenes.length) existingLariaScenes.forEach(s => s.delete());
    if(existingLariaJEs.length) existingLariaJEs.forEach(je => je.delete());

    game.scenes.importFromCompendium(lariaScenePack, lariaPackSceneId);

    JEPackIds.forEach(id => game.journal.importFromCompendium(lariaJEPack, id));

});
