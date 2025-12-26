// DOM Elements
const landing = document.getElementById('landing');
const transition = document.getElementById('transition');
const main = document.getElementById('main');
const inviteCode = document.getElementById('inviteCode');
const vipText = document.querySelector('.vip-text');
const claimBtn = document.getElementById('claimBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// 페이지 전환 함수
function showPage(pageToHide, pageToShow, callback) {
    pageToHide.classList.remove('active');
    
    setTimeout(() => {
        pageToShow.classList.add('active');
        if (callback) callback();
    }, 600);
}

// 초대코드 입력 처리
inviteCode.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inviteCode.value.trim() !== '') {
        // 랜딩 → 트랜지션 페이지
        showPage(landing, transition, () => {
            // VIP 텍스트 애니메이션 시작
            vipText.classList.add('animate');
            
            // 애니메이션 완료 후 메인 페이지로
            setTimeout(() => {
                showPage(transition, main);
            }, 2200);
        });
    }
});

// 상품권 수령 버튼
claimBtn.addEventListener('click', () => {
    // 버튼에 클릭 효과
    claimBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        claimBtn.style.transform = '';
        modal.classList.add('active');
    }, 150);
});

// 모달 닫기
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// 모달 배경 클릭시 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// 페이지 로드 시 입력창에 포커스
window.addEventListener('load', () => {
    setTimeout(() => {
        inviteCode.focus();
    }, 100);
});
