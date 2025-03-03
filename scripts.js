document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item a");
    const cards = document.querySelectorAll(".card");

    menuItems.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            const category = item.dataset.category;

            // Filtrar os cards com base na categoria
            cards.forEach(card => {
                card.style.display = card.dataset.category === category || category === "all" ? "block" : "none";
            });
        });
    });
});
