export default {
  name: 'projet',
  title: 'Mes Projets',
  type: 'document',
  fields: [
    { name: 'titre', type: 'string', title: 'Titre du projet' },
    { name: 'client', type: 'string', title: 'Nom du client' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'stack', type: 'array', of: [{ type: 'string' }], title: 'Technologies' },
    { name: 'resultat', type: 'string', title: 'Resultat mesurable' },
    { name: 'date', type: 'date', title: 'Date de mission' },
    { name: 'image', type: 'image', title: 'Capture / Logo' },
  ]
}
