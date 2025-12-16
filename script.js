 function openModal(name, price, capacity) {
      document.getElementById('shipName').innerText = name;
      document.getElementById('shipInfo').innerText = `Price: $${price.toLocaleString()} | Capacity: ${capacity}`;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

