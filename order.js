document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const menuSelect = document.getElementById('menu');
    const addButton = document.getElementById('addMenu');
    const submitButton = document.getElementById('submitOrder');
    const selectedItemsList = document.getElementById('selectedItems');

    categorySelect.addEventListener('change', updateMenu);
    addButton.addEventListener('click', addMenuItem);
    submitButton.addEventListener('click', submitOrder);

    function updateMenu() {
        const category = categorySelect.value;
        menuSelect.innerHTML = '<option value="" selected disabled>เลือกเมนู</option>'; // Clear previous options

        const items = {
            เครื่องดื่ม: ['Espresso', 'Latte', 'Cappuccino'],
            เมนูอาหารหลัก: ['ข้าวผัด', 'ข้าวทอดกระเทียม', 'ข้วผัดกระเพรา', 'ข้าวคลุกกะปิ', 'ข้าวมันไก่', 'ข้าวไข่เจียว'],
            เมนูเส้น: ['ผัดไท', 'มาม่าต้มยำ', 'ราดดหน้า'],
            เมนูทานเล่น: ['เฟรนฟราย', 'ชีสบอล', 'กุ้งชุปแป้งทอด' ,'ไก่ชุปแป้งทอด', 'ปอเปี๊ยะผัก', 'นัทเกต'],
            เมนูไอศครีม: ['ice-creem', 'Big ice-creem', 'Tost' ,'waffern ice-creem', 'Mix ice-creem', 'Banana ice-creem']
        };

        if (items[category]) {
            items[category].forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                menuSelect.appendChild(option);
            });
        }
    }

    function addMenuItem() {
        const category = categorySelect.value;
        const menu = menuSelect.value;

        if (category && menu) {
            const listItem = document.createElement('li');
            listItem.textContent = `${category} - ${menu}`;
            selectedItemsList.appendChild(listItem);
            menuSelect.value = ''; // Clear selected menu
        } else {
            alert('กรุณาเลือกประเภทและเมนู');
        }
    }

    function submitOrder() {
        const items = Array.from(selectedItemsList.children).map(item => item.textContent);
        if (items.length > 0) {
            alert(`ออเดอร์ของคุณ: \n${items.join('\n')}`);
        } else {
            alert('กรุณาเลือกเมนูก่อน');
        }
    }
});
