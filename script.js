const navBar = document.querySelectorAll('.navBarInLine')
const currentURL =window.location.href

navBar.forEach(link => {
    if (link.href === currentURL){
        console.log("eşledi")
        link.classList.add('active')
    } else {
        console.log("eşlemedi")
        link.classList.remove('active')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const animationText = document.querySelector('.animationText');

    // Sayfa kaydırıldıkça animasyonu başlatacak fonksiyon
    const checkScroll = () => {
        const rect = animationText.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animationText.classList.add('visible');
        }
    };



    // Sayfa yüklenirken ve her kaydırıldığında kontrol et
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Sayfa yüklendiğinde hemen kontrol et
});