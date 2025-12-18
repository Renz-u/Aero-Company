 function openModal(name, price, capacity) {
      document.getElementById('shipName').innerText = name;
      document.getElementById('shipInfo').innerText = `Price: $${price.toLocaleString()} | Capacity: ${capacity}`;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        item.style.display =
          filter === 'all' || item.classList.contains(filter)
            ? 'block'
            : 'none';
      });
    });
  });

  // IMAGE MODAL
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalText = document.getElementById('modalText');

  items.forEach(item => {
    item.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = item.querySelector('img').src;
      modalText.textContent = item.querySelector('.overlay').textContent;
    });
  });

  document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
  };