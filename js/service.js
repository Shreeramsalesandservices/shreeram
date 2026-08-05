  function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling;

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}