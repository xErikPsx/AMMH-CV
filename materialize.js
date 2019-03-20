// ;
// ((d) => {
//   d.addEventListener('DOMContentLoaded', e =>{
//     M.AutoInint()
//   })
// }) (docuement);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems)
});

var instance = M.Tabs.init(el);