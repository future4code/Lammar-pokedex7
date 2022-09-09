export const goToBack = (navigate) => {
    navigate(-1)};

export const goToHome = (navigate) => {
    navigate("/")};

export const goToAddPoke = (navigate) => {
    navigate("/addPoke")};

export const goToPokemonDetails = (navigate, name) => {
    navigate(`/pokeDetails/${name}`)};
