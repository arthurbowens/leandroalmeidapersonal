import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly whatsappUrl =
    'https://wa.me/5592984758570?text=Ol%C3%A1%20Leandro!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.';

  protected readonly navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Método', id: 'metodo' },
    { label: 'Resultados', id: 'resultados' },
    { label: 'Contato', id: 'contato' },
  ];

  protected readonly benefits = [
    {
      icon: 'clipboard',
      title: 'Treino 100% personalizado',
      text: 'Cada série, cada repetição pensada para o seu corpo e para o shape que você quer conquistar.',
    },
    {
      icon: 'dumbbell',
      title: 'Foco em estética corporal',
      text: 'Hipertrofia estratégica, definição muscular e proporções harmoniosas — sem achismo.',
    },
    {
      icon: 'chart',
      title: 'Acompanhamento de perto',
      text: 'Correções de execução, ajustes semanais e evolução monitorada em cada fase.',
    },
    {
      icon: 'trending',
      title: 'Resultados que aparecem',
      text: 'Método validado para quem quer sair do platô e finalmente ver o espelho refletir seu esforço.',
    },
  ];

  protected readonly steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      text: 'Entendo seu objetivo, rotina, histórico e o shape que você quer alcançar.',
    },
    {
      num: '02',
      title: 'Plano sob medida',
      text: 'Monto treino e estratégia focados em estética corporal — nada de fórmula genérica.',
    },
    {
      num: '03',
      title: 'Execução guiada',
      text: 'Você treina com clareza. Eu ajusto, corrijo e acelero sua evolução.',
    },
    {
      num: '04',
      title: 'Shape conquistado',
      text: 'Corpo definido, confiança lá em cima e a satisfação de ter chegado onde planejou.',
    },
  ];

  protected readonly stats = [
    { value: '100%', label: 'Personalizado', icon: 'check-badge' },
    { value: '1:1', label: 'Acompanhamento', icon: 'user' },
    { value: 'Total', label: 'Dedicação', icon: 'heart' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(id: string): void {
    this.closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
