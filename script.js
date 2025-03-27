function changeCheckedTo(optionValue) {
  const radioButtons = document.querySelectorAll('input[name="group1"]');
  
  radioButtons.forEach(radio => {
    if (radio.value === optionValue) {
      radio.checked = true;
    }
  });

  document.querySelectorAll('.common-block').forEach(block => {
    block.classList.remove('active-block'); // Remove active-block class
  });

  const selectedBlock = document.querySelector(`input[name="group1"][value="${optionValue}"]`).closest('.common-block');
  selectedBlock.classList.add('active-block');

  const activeAmount = selectedBlock.querySelector('.reduce-amount').textContent;
            document.querySelector('.total-amount .amount-flex span:last-child').textContent = activeAmount;
}


function showPopup() {
            const activeBlock = document.querySelector('.common-block.active-block');
            const activeAmount = activeBlock.querySelector('.reduce-amount').textContent;

            const popup = document.querySelector('.popup');
            const overlay = document.querySelector('.popup-overlay');

            popup.querySelector('p').textContent = `Product of ${activeAmount} is successfully added to your cart.`;

            popup.style.display = 'block';
            overlay.style.display = 'block';
        }

function closePopup() {
            const popup = document.querySelector('.popup');
            const overlay = document.querySelector('.popup-overlay');

            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
