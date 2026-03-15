export default {
  name: 'certification',
 title: 'Mes Certifications',
  type: 'document',
  fields: [
    { name: 'nom', type: 'string', title: 'Nom de la certification' },
    { name: 'organisme', type: 'string', title: 'Ex: Cisco, Microsoft' },
    { name: 'badge', type: 'image', title: 'Image du badge' },
    { name: 'dateObtention', type: 'date', title: 'Date obtention' },
    { name: 'lienVerification', type: 'url', title: 'Lien Credly' },
  ]
}
