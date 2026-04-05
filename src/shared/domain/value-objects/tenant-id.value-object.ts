export class TenantId {
  constructor(public readonly value: string) {
    if (!value?.trim()) {
      throw new Error('TenantId cannot be empty');
    }
  }
}
