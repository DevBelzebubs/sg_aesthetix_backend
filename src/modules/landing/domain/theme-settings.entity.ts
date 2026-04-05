export class ThemeSettings {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly primaryColor: string,
    public readonly logoUrl: string,
    public readonly font: string,
    public readonly instagramUrl: string,
    public readonly facebookUrl: string,
    public readonly whatsapp: string,
    public readonly address: string,
    public readonly welcomeMsg: string,
    public readonly updatedAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    primaryColor: string;
    logoUrl: string;
    font: string;
    instagramUrl: string;
    facebookUrl: string;
    whatsapp: string;
    address: string;
    welcomeMsg: string;
    updatedAt?: Date;
  }): ThemeSettings {
    return new ThemeSettings(
      params.id,
      params.tenantId,
      params.primaryColor,
      params.logoUrl,
      params.font,
      params.instagramUrl,
      params.facebookUrl,
      params.whatsapp,
      params.address,
      params.welcomeMsg,
      params.updatedAt ?? new Date(),
    );
  }
}
