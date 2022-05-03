function extraPowers(type) {
  if (type === "playlists") return "text-center";
  else if (type === "explore")
    return "borderNormal dgrid supremeContainerHeaderGrid";
  else return "borderNormal";
}

export { extraPowers };
