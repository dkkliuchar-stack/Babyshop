// Переводчик: размер одежды → возраст ребёнка
export const sizeToAge: Record<string, string> = {
    '50': '0-1 мес',
    '56': '1-3 мес',
    '62': '3-6 мес',
    '68': '6-9 мес',
    '74': '9-12 мес',
    '80': '12-18 мес',
    '86': '18-24 мес',
    '92': '2-3 лет',
    '98': '3-4 лет',
    '104': '4-5 лет',
    '110': '5-6 лет',
  };
  
  // Переводчик: возраст в месяцах → подходящий размер
  export function getSize(ageMonths: number): string {
    if (ageMonths <= 1)  return '50';
    if (ageMonths <= 3)  return '56';
    if (ageMonths <= 6)  return '62';
    if (ageMonths <= 9)  return '68';
    if (ageMonths <= 12) return '74';
    if (ageMonths <= 18) return '80';
    if (ageMonths <= 24) return '86';
    if (ageMonths <= 36) return '92';
    if (ageMonths <= 48) return '98';
    if (ageMonths <= 60) return '104';
    return '110';
  }
  
  // Переводчик: возраст в месяцах → фильтр товаров по бюджету
  export function filterByBudget(price: number, budget: number): boolean {
    return price <= budget;
  }