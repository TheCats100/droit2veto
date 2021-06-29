function Valider() {
  const form = document.formulaire;
  if (form.nom.value !== ''
      && form.prenom.value !== ''
      && form.ordinal.value !== ''
      && form.etablissement.value !== ''
      && form.ville.value !== ''
      && form.code.value !== ''
      && form.pays.value !== ''
      && form.tel.value !== ''
      && form.telPerso.value !== ''
  ) {
    console.log(form.nom.value);
    return true;
  }
  {
    alert('Champs manquant');
    return false;
  }
}

export default Valider;
