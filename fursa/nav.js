// nav.js - Shared navigation injector
function getNavHTML(activePage) {
  const pages = [
    { id: 'overview',      label: 'نظرة عامة',    href: 'index.html',        icon: '<rect x="2" y="2" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="10" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.5"/><rect x="2" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.5"/><rect x="10" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.5"/>' },
    { id: 'applications',  label: 'مركز الطلبات', href: 'applications.html', icon: '<rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M5 7h8M5 10h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>', badge: '18' },
    { id: 'opportunities', label: 'الفرص الحالية', href: 'opportunities.html', icon: '<circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="1.3"/><path d="M9 5v4l3 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' },
    { id: 'applicants',    label: 'المتقدمون',    href: 'applicants.html',   icon: '<circle cx="9" cy="6" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M3 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' },
  ];
  const reports = [
    { id: 'statistics', label: 'الإحصائيات', href: 'statistics.html', icon: '<path d="M3 11L7 7l3 3 5-6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id: 'schedule',   label: 'المواعيد',    href: 'schedule.html',   icon: '<rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M6 3V2M12 3V2M2 7h14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>', badge: '5', badgeClass: 'bdg-warn' },
  ];

  function navItem(p) {
    const isActive = p.id === activePage;
    const badge = p.badge ? `<span class="bdg ${p.badgeClass||''}">${p.badge}</span>` : '';
    return `<a class="nav-i${isActive?' active':''}" href="${p.href}">
      <svg class="nav-ic" viewBox="0 0 18 18" fill="none">${p.icon}</svg>
      ${p.label}${badge}
    </a>`;
  }

  const pageTitles = {
    overview: 'نظرة عامة',
    applications: 'مركز الطلبات',
    opportunities: 'الفرص الحالية',
    applicants: 'المتقدمون',
    statistics: 'الإحصائيات',
    schedule: 'المواعيد',
  };

  return {
    topbar: `
      <div class="topbar">
        <div class="logo-area">
          <div class="logo-mark">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L14 6V12L9 16L4 12V6L9 2Z" fill="white" fill-opacity="0.9"/>
              <circle cx="9" cy="9" r="2.5" fill="#1D9E75"/>
            </svg>
          </div>
          <div class="logo-text">فُرَص</div>
        </div>
        <div class="page-title-top">${pageTitles[activePage]||''}</div>
        <div class="avatar">أح</div>
      </div>`,
    sidebar: `
      <div class="sidebar">
        <div class="nav-lbl">القائمة</div>
        ${pages.map(navItem).join('')}
        <div class="nav-lbl" style="margin-top:8px">التقارير</div>
        ${reports.map(navItem).join('')}
      </div>`
  };
}

function injectNav(activePage) {
  const nav = getNavHTML(activePage);
  document.getElementById('topbar-placeholder').outerHTML = nav.topbar;
  document.getElementById('sidebar-placeholder').outerHTML = nav.sidebar;
}
