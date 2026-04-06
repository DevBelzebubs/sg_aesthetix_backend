export class RefreshToken {
  private constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly tokenHash: string,
    public readonly expiresAt: Date,
    public readonly revoked: boolean,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date;
    revoked?: boolean;
    createdAt?: Date;
  }): RefreshToken {
    return new RefreshToken(
      params.id,
      params.userId,
      params.tokenHash,
      params.expiresAt,
      params.revoked ?? false,
      params.createdAt ?? new Date(),
    );
  }
}
